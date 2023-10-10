import Wrapper from "@/app/Wrapper";
import State from "@/components/State";
import { useRouterReady } from "@/hooks/useRouterReady";

export default function Page() {
  const ready = useRouterReady();

  return (
    <Wrapper>
      <h1 className="text-xl">Pages router</h1>
      {ready && <State />}
    </Wrapper>
  );
}
