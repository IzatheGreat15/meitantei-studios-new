import {
  FiCode,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";

const steps = [
  {
    number: "01",
    title: "Tell me your needs",
    description:
      "We discuss your business, goals, services and ideal customers.",
    icon: FiMessageCircle,
  },
  {
    number: "02",
    title: "Design & build",
    description:
      "I create a modern website tailored to your business.",
    icon: FiCode,
  },
  {
    number: "03",
    title: "Review & refine",
    description:
      "You review the website and request agreed adjustments.",
    icon: FiSearch,
  },
  {
    number: "04",
    title: "Launch your site",
    description:
      "Your website goes live, ready for customers to discover.",
    icon: IoRocketOutline,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative isolate overflow-hidden py-16 sm:py-20 bg-[#050d20] py-20 text-white">
      
      {/* Background accent */}
      <div className="pointer-events-none absolute -left-32 bottom-[-10rem] h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-[-10rem] h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-600">
            How it works
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Simple from start to launch.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            No technical headaches. Just a clear process from start to finish.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <div key={number} className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-xl text-blue-600">
                  <Icon />
                </span>

                <span className="text-[10px] font-extrabold tracking-widest text-blue-600">
                  STEP {number}
                </span>
              </div>

              <h3 className="mt-5 text-base font-extrabold text-sky-400">
                {title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}