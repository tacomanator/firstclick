import Wrapper from "@/app/Wrapper";
import State2 from "@/components/State2";
import { useRouterReady } from "@/hooks/useRouterReady";

export default function Page() {
  const ready = useRouterReady();

  return (
    <Wrapper>
      <h1 className="text-xl">Pages router 2</h1>
      {ready && <State2 />}
    </Wrapper>
  );
}
