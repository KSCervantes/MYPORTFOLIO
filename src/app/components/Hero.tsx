'use client'
import { useState, useEffect, } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Skill data with SVG logos
  const skills = [
    {
      name: 'React',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      )
    },
    {
      name: 'Next.js',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.146 4.318 16.956 1.669 13.94.348 13.053.107 12.187.012 11.572.012v-.013z"/>
        </svg>
      )
    },
    {
      name: 'Laravel',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.028.014-.011.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .375 0l4.513 2.598c.016.009.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.018.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.018-.028-.03v-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm6.492-8.256l-3.76 2.164 3.76 2.164 3.759-2.164zm-.376 7.178l-2.182-1.256-1.579-.908v4.283l2.182 1.256 1.579.908zm7.065-1.255l-3.76 2.164v4.325l8.273-4.76V3.624z"/>
        </svg>
      )
    },
    {
      name: 'PHP',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.291-.264.455-.648.492-1.187.009-.539-.189-.847-.542-1.07-.219-.138-.534-.207-.621 0zm5.691 0h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.291-.264.455-.648.492-1.187.009-.539-.189-.847-.542-1.07-.219-.138-.534-.207-.621 0z"/>
          <path fill="currentColor" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM8.5 8.287c.157.048.987.138 1.417.517.431.379.534.24.534.240.534-.379 1.417-.517 1.417-.517.157-.048.987.138 1.417.517.431.379.534.24.534.24.534-.379 1.417-.517 1.417-.517.987-.138 1.848.379 2.279 1.379.431 1 .017 2.379-.414 3.379-.431 1-.431 1.379-.862 1.379h-1.293c-.431 0-.862-.138-1.293-.517-.431-.379-.534-.758-.534-.758-.534.379-1.417.517-1.417.517-.987.138-1.848-.379-2.279-1.379-.431-1-.017-2.379.414-3.379.431-1 .431-1.379.862-1.379h1.293z"/>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      )
    },
    {
      name: 'HTML',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      )
    },
    {
      name: 'Python',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07.32.04.28.02.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      )
    },
    {
      name: 'Flutter',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
        </svg>
      )
    },
    {
      name: 'TensorFlow',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092-1.788V9.115l-3.107 1.808V7.603l6.168 3.564z"/>
        </svg>
      )
    },
    {
      name: 'Supabase',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
        </svg>
      )
    },
    {
      name: 'Firebase',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M5.229 4.104l3.83 3.83L6.975 2.387a.55.55 0 0 1 .947-.452L12 8.062l4.078-6.127a.55.55 0 0 1 .947.452L14.941 7.934l3.83-3.83a.55.55 0 0 1 .779 0l.779.779a.55.55 0 0 1 0 .779L12 13.891 3.671 5.562a.55.55 0 0 1 0-.779l.779-.779a.55.55 0 0 1 .779 0z"/>
          <path fill="currentColor" d="M20.329 18.438L12 13.891l-8.329 4.547a.55.55 0 0 0 0 .952l7.775 4.234a1.1 1.1 0 0 0 1.108 0l7.775-4.234a.55.55 0 0 0 0-.952z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
          className="absolute top-6 left-1 w-28 h-28 sm:top-20 sm:left-20 sm:w-72 sm:h-72 bg-black/5 rounded-full blur-3xl"
        />
        <div
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
          className="absolute bottom-6 right-1 w-36 h-36 sm:bottom-20 sm:right-20 sm:w-96 sm:h-96 bg-black/3 rounded-full blur-3xl"
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-2 w-2.5 h-2.5 sm:right-1/4 sm:w-4 sm:h-4 bg-black/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 left-2 w-3 h-3 sm:left-1/4 sm:w-6 sm:h-6 bg-black/15 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 sm:w-8 sm:h-8 border-2 border-black/20 rotate-12 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-2 sm:px-4">
        <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto text-left">
          {/* Text content */}
          <div className="space-y-6 sm:space-y-10 mt-8 sm:mt-16 mb-8 sm:mb-16">
            <p className="text-1xl sm:text-lg md:text-xl text-gray-500 mb-2 sm:mb-4 text-left">Hi Good Day, I&#39;m</p>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-2 sm:mb-4 text-black leading-tight text-left">
              Kyle Cervantes
            </h1>
            <h2 className="text-base sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6 text-left">
              Software Developer
            </h2>
            <p className="text-2x1 sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-2xl mb-8 sm:mb-12 leading-relaxed px-1 sm:px-2 text-left">
              I&#39;m a student who is interested in web and mobile development. I&#39;m also a person who is interested in learning new things.
            </p>

            {/* Infinite scrolling skills with logos */}
            <div className="mb-6 sm:mb-12 w-full overflow-x-hidden overflow-y-hidden">
              <div className="relative">
                <div
                  className="flex gap-2 sm:gap-6 whitespace-nowrap animate-scroll min-w-max h-10 sm:h-14"
                  style={{
                    animation: 'scroll 20s linear infinite'
                  }}
                >
                  {/* First set of skills */}
                  {skills.map((skill) => (
                    <div
                      key={`first-${skill.name}`}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 cursor-default hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="text-white flex-shrink-0">
                        {skill.logo}
                      </div>
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {skills.map((skill) => (
                    <div
                      key={`second-${skill.name}`}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 cursor-default hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="text-white flex-shrink-0">
                        {skill.logo}
                      </div>
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center px-2 sm:px-4 w-full">
              <a
                href="#projects"
                className="w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-4 bg-black text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:scale-105 active:scale-95 text-center mb-2 sm:mb-0"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-4 bg-transparent border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }

        /* Prevent animation pause on hover for mobile */
        @media (max-width: 768px) {
          .animate-scroll:hover {
            animation-play-state: running;
          }
        }

        /* Ensure smooth scrolling on all devices */
        .animate-scroll {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}