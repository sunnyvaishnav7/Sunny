import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let rafId: number | null = null;
      let isHovered = false;

      // rAF loop only runs while hovered — not constantly
      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        if (isHovered) {
          rafId = requestAnimationFrame(updatePosition);
        }
      };

      // Use elem-level mousemove instead of global document listener
      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          const r = elem.getBoundingClientRect();
          mouseX = r.width / 2;
          mouseY = r.height / 2;
        }
      };

      const onMouseEnter = () => {
        isHovered = true;
        if (!rafId) rafId = requestAnimationFrame(updatePosition);
      };

      const onMouseLeave = () => {
        isHovered = false;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        const rect = elem.getBoundingClientRect();
        mouseX = rect.width / 2;
        mouseY = rect.height / 2;
      };

      // passive: true — tells browser this listener won't call preventDefault,
      // allowing it to scroll without waiting for JS to finish
      elem.addEventListener("mousemove", onMouseMove, { passive: true });
      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mouseleave", onMouseLeave);

      cleanups.push(() => {
        elem.removeEventListener("mousemove", onMouseMove);
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mouseleave", onMouseLeave);
        if (rafId) cancelAnimationFrame(rafId);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/sunnyvaishnav7" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/shani-vaishnav-10a50a1bb/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/iamsunnyvaishanv" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="https://drive.google.com/file/d/1a3dWKAj66mtC7gnppBP5Oj2Z4r9sFn-k/view?usp=drivesdk">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;