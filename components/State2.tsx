"use client";

import { useRouter } from "next/router";

export default function State2() {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-lg">State2</h2>
      <p>Foo: {router.query.foo}</p>
      <button
        className="text-blue-500"
        onClick={() =>
          router.replace({ query: { foo: "bar" } }, undefined, {
            shallow: true,
          })
        }
      >
        Set state
      </button>
    </div>
  );
}
