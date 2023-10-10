"use client";

import { useQueryState } from "next-usequerystate";

export default function State() {
  const [urlState, setUrlState] = useQueryState("state");

  return (
    <div>
      <h2 className="text-lg">State</h2>
      <p>Foo: {urlState}</p>
      <button className="text-blue-500" onClick={() => setUrlState("bar")}>
        Set state
      </button>
    </div>
  );
}
