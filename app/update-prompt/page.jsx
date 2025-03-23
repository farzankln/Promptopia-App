"use client";

import { Suspense } from "react";
import UpdatePrompt from "./UpdatePrompt";

const UpdatePromptPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default UpdatePromptPage;
