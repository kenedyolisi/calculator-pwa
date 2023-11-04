export function Placeholder({ colspan }: { colspan?: number }) {
  return <span className={`${colspan ? "col-" + colspan : "col"} m-1`}></span>;
}
