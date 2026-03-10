import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2026{" "}
        <Link to="/" className="hover:underline">
          Cinemate™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://www.instagram.com/cinemate_info_2112?igsh=MTN1bXF4azR0MXJiYw==" target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://youtube.com/@cinemate_info?si=BlAVOuo2lke8kXGR" target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">
            Youtube
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/share/p/1GRvtiScwx/" target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://github.com/lgreeshma783-eng/Cinemate" target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
