import { Spinner } from "src/components/";

type LoadingProps = {
  loadingHeight: string;
  spinnerWidth: string;
};

function Loading({ loadingHeight, spinnerWidth }: LoadingProps) {
  return (
    <div className={`flex ${loadingHeight}`}>
      <Spinner classes={`${spinnerWidth} m-auto`} />
    </div>
  );
}

export default Loading;
