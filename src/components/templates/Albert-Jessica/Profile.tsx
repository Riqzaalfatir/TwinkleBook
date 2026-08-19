import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn } from "../../../lib/animation";

type ProfileProps = {
  data?: any;
};

const splitParentName = (text?: string) => {
  if (!text) return null;
  const idx = text.indexOf(" and ");
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx + 4)} {/* termasuk "and" */}
      <br />
      {text.slice(idx + 5)}
    </>
  );
};

const Profile = ({ data }: ProfileProps) => {
  const groomFullName = data?.dataEvent?.groomFullName ?? "ALBERT NATHANIEL";
  const brideFullName =
    data?.dataEvent?.brideFullName ?? "JESSICA NATHALIE WIBOWO";

  const groomParent =
    data?.dataEvent?.groomParent ??
    "Mr. Lie Andi Kunadi and Mrs. Juliasih Lukanta";
  const brideParent =
    data?.dataEvent?.brideParent ??
    "Mr. Setiyono Wibowo and Mrs. Wini Anggraini";

  return (
    <section
      id="profile"
      className="relative w-full pt-[75px] pb-[71px] px-10 overflow-hidden"
    >
      <Image
        src="/images/Albert-Jessica/Profile/BgKertas.webp"
        alt="Profile Background"
        fill
        className="object-cover z-10"
      />

      <div className="relative  flex flex-col items-center text-center justify-center z-20">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-lora text-[14px] text-[#33302D]"
        >
          Together with their families <br />
          invite you to celebrate <br />
          their marriage
        </motion.p>
        <div className="flex flex-col items-center justify-center leading-none mt-[46.5px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-marcellus text-[22px] text-[#815421] uppercase leading-none break-words max-w-[300px]"
          >
            {groomFullName.toUpperCase()}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-lora font-medium text-[14px] text-[#33302D] leading-[18px] pt-[13px] break-words max-w-[250px]"
          >
            {splitParentName(groomParent)}
          </motion.p>
        </div>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-marcellus text-[24px] text-[#815421] mt-[27px]"
        >
          &
        </motion.h3>
        <div className="flex flex-col items-center justify-center leading-none mt-[28px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-marcellus text-[22px] text-[#815421] uppercase leading-none break-words max-w-[300px]"
          >
            {brideFullName.toUpperCase()}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-lora font-medium text-[14px] text-[#33302D] leading-[18px] pt-[13px] break-words max-w-[250px]"
          >
            {splitParentName(brideParent)}
          </motion.p>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-lora text-[14px] text-[#33302D] mt-[46.5px]"
        >
          Our joy will be complete with <br />
          your presence and blessings.
        </motion.p>
      </div>
    </section>
  );
};

export default Profile;
