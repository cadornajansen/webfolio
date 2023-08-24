"use client";

import { motion } from "framer-motion";
import React, { useState, ReactElement, ReactNode } from "react";
import { EyeIcon, CodeIcon } from "../icons/free-svg";
import { Highlight, themes } from "prism-react-renderer";
import { CopyIcon } from "../icons/free-svg";
import { renderToString } from "react-dom/server";

interface Tab {
  label: string;
  icon: JSX.Element;
  id: string;
}

interface TabHeadingProps {
  id: number;
  title: string;
  tabs: Tab[];
  currentTab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabHeading: React.FC<TabHeadingProps> = ({
  id,
  title,
  tabs,
  currentTab,
  setTab,
}) => (
  <div className="flex items-center justify-between">
    <h2 className="">{title}</h2>
    <div className="flex rounded-lg bg-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${
            currentTab === tab.id ? "text-white" : ""
          } relative px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg transition duration-300`}
          onClick={() => setTab(tab.id)}
        >
          {currentTab === tab.id && (
            <motion.div
              layoutId={`${id}`}
              className="rounded-lg absolute inset-0 bg-[var(--accent)]"
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            />
          )}
          <motion.span className="flex gap-2 items-center text-sm font-medium z-10 relative">
            {tab.icon}
            {tab.label}
          </motion.span>
        </button>
      ))}
    </div>
  </div>
);

interface ComponentProps {
  key: number;
  title: string;
  source: string;
  children: React.ReactElement;
}

const Component: React.FC<ComponentProps> = ({
  key,
  title,
  source,
  children,
}) => {
  const [currentTab, setTab] = useState<string>(`view-${key}`);

  const tabs: Tab[] = [
    { label: "View", icon: <EyeIcon />, id: `view-${key}` },
    { label: "Code", icon: <CodeIcon />, id: `code-${key}` },
  ];

  return (
    <section className="max-w-full w-full py-5 md:px-14 space-y-5">
      <TabHeading
        id={key}
        title={title}
        tabs={tabs}
        currentTab={currentTab}
        setTab={setTab}
      />
      <div className="border rounded-md">
        {currentTab === `view-${key}` ? (
          <div className="my-10 bg-white flex items-center justify-center">
            {children}
          </div>
        ) : (
          <div className="bg-[#2a2734] rounded px-2 space-y-4">
            <div className="flex items-center justify-between py-4 text-sm font-semibold border-b border-white/20">
              <span className="text-white">NeuButton.jsx</span>
              <button className="cursor-pointer text-white">
                <CopyIcon />
              </button>
            </div>
            <div className="overflow-x-scroll">
              <Highlight
                theme={themes.duotoneDark}
                code={source}
                language="tsx"
              >
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre className="md:max-w-prose pb-3">
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="mr-6">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Component;
