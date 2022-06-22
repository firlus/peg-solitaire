export default function Field({ state, onClick }) {
  return (
    <div
      className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 m-2"
      onClick={onClick}
    >
      {state !== " " ? (
        <div
          className={"rounded-full w-full h-full ".concat(
            state === "S"
              ? "bg-selected"
              : state === "X"
              ? "bg-full"
              : "bg-empty"
          )}
        ></div>
      ) : (
        <></>
      )}
    </div>
  );
}
