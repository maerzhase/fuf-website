import React, { useState } from "react";
import { getCollectionEntries } from "@/api/api";
import Head from "next/head";
import { CMS_NAME } from "@/api/constants";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import { useMotionValue } from "framer-motion";

const ProjectStream = dynamic(() => import("@/components/ProjectStream"), {
  ssr: false,
});

export default function Index({ preview, allEntries }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const prog = useMotionValue(1);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepProgress = ({ progress, ...rest }) => {
    prog.set(progress + 1 * currentStepIndex);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <ProjectStream
          currentStepIndex={currentStepIndex}
          currentStepProgress={prog}
          onStepEnter={onStepEnter}
          onStepProgress={onStepProgress}
          projects={allEntries.entries}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ preview = null }) {
  const allEntries = (await getCollectionEntries("project")) || [];
  return {
    props: { preview, allEntries },
  };
}
