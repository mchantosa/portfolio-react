export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>Hello world</p>
      <div>{children}</div>
    </>
  );
}
