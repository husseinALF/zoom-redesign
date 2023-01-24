export default function Card({ icon, title }) {
  return (
    <section
      className="flex   flex-wrap justify-center items-center   border border-solid border-darkZoom-blue   w-full h-24 
         rounded-2xl hover:bg-slate-300 cursor-pointer"
    >
      <span className="text-4xl"> {icon} </span>

      <h2 className="text-lg font-bold m-3">{title}</h2>
    </section>
  );
}
