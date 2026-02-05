export default function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-[#030303] -z-[50]" />
      <div 
        className="fixed inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none -z-[40]"
        style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
        }}
      />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-[30]" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none -z-[20] mix-blend-screen" />
      <div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none -z-[20] mix-blend-screen" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none -z-[10]" />
    </>
  );
}