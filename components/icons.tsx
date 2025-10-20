import React from 'react';

const IconWrapper = (props: React.SVGProps<SVGSVGElement> & { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
    {...props}
  >
    {props.children}
  </svg>
);

export const MapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M12.573 2.573a.75.75 0 01.988 1.052l-3.373 5.903a.75.75 0 01-1.172.04L5.5 5.574l-2.074 3.63a.75.75 0 01-1.052-.988l3.373-5.903a.75.75 0 011.172-.04L9.5 6.426l2.074-3.63z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.573 2.573a.75.75 0 01.988 1.052l-3.373 5.903a.75.75 0 01-1.172.04L5.5 5.574l-2.074 3.63a.75.75 0 01-1.052-.988l3.373-5.903a.75.75 0 011.172-.04L9.5 6.426l2.074-3.63zM15.5 10.75a.75.75 0 00-1.052-.988l-5.903 3.373a.75.75 0 00-.04 1.172l3.63 2.074 2.074 3.63a.75.75 0 001.172-.04l3.373-5.903a.75.75 0 00-.988-1.052l-3.63-2.074-1.926-3.374z" clipRule="evenodd" />
    </IconWrapper>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.42-.25.692-.455.272-.204.572-.477.869-.774.297-.297.615-.635.934-.994a6.5 6.5 0 001.217-2.023c.37-1.02.58-2.207.58-3.535C15 6.12 12.878 4 10 4S5 6.12 5 9.5c0 1.328.21 2.515.58 3.535a6.5 6.5 0 001.217 2.023c.319.36.637.697.934.994.297.297.597.57.869.774.272.206.506.355.692.455a5.741 5.741 0 00.281.14l.018.008.006.003zM10 11.25a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" clipRule="evenodd" />
    </IconWrapper>
);

export const TicketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h13.25c1.035 0 1.875.84 1.875 1.875v7.25c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 13.625v-7.25zM3.375 4.5A1.875 1.875 0 001.5 6.375v1.125c1.131-1.036 3.6-1.036 4.5 0v-1.125A1.875 1.875 0 003.375 4.5zM16.625 4.5a1.875 1.875 0 00-1.875 1.875v1.125c.9 1.036 3.369 1.036 4.5 0V6.375A1.875 1.875 0 0016.625 4.5zM18.5 9a.5.5 0 01-.5.5h-16a.5.5 0 010-1h16a.5.5 0 01.5.5zM1.5 13.625v-1.125c1.131 1.036 3.6 1.036 4.5 0v1.125A1.875 1.875 0 013.375 15.5h-1.5zM16.625 15.5a1.875 1.875 0 01-1.875-1.875v-1.125c.9 1.036 3.369 1.036 4.5 0v1.125A1.875 1.875 0 0116.625 15.5z" />
    </IconWrapper>
);

export const RocketLaunchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M15.592 2.51a.75.75 0 01.583.844l-.452 3.87a3.543 3.543 0 01-1.12 2.162L12 12.01V15.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.144-.454l2.605-2.629a2.043 2.043 0 00.648-1.246l.452-3.87a.75.75 0 01.844-.583zM12.98 12.51a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zM6.98 12.51a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zM4.742 4.962a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06L5.803 8.5l-1.06-1.061a.75.75 0 010-1.06l2.25-2.25a.75.75 0 01-2.25-2.25L3.682 6.182a.75.75 0 01-1.06-1.061l2.25-2.25a.75.75 0 011.06 0zM3.22 12.51a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
    </IconWrapper>
);

export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M.75 4.75A.75.75 0 011.5 4h12.5a.75.75 0 010 1.5H1.5A.75.75 0 01.75 4.75zM.75 8.25A.75.75 0 011.5 7.5h12.5a.75.75 0 010 1.5H1.5A.75.75 0 01.75 8.25zM.75 11.75a.75.75 0 011.5-1.5h12.5a.75.75 0 010 1.5H1.5a.75.75 0 01-.75-.75zM17.5 1.5a.75.75 0 00-.75.75v14.5a.75.75 0 001.5 0V2.25a.75.75 0 00-.75-.75z" clipRule="evenodd" />
    </IconWrapper>
);

export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
    </IconWrapper>
);

export const PaperAirplaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0015.493-1.805.75.75 0 00.002-1.003A60.517 60.517 0 003.478 2.405z" />
    </IconWrapper>
);

export const InformationCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </IconWrapper>
);

export const ClockOutlineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconWrapper {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.25 5.25a.75.75 0 011.5 0v4.59L14.28 12.7a.75.75 0 11-.9 1.2l-4.5-3a.75.75 0 01-.38-.65V5.25z" clipRule="evenodd" />
  </IconWrapper>
);

export const LocationMarkerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M3.013 7.11a.75.75 0 011.023-.538l12.016 4.88a.75.75 0 010 1.076l-12.016 4.88a.75.75 0 01-1.023-.538V7.11z" clipRule="evenodd" />
    </IconWrapper>
);

export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L10 8.94l3.47-3.47a.75.75 0 111.06 1.06L11.06 10l3.47 3.47a.75.75 0 11-1.06 1.06L10 11.06l-3.47 3.47a.75.75 0 01-1.06-1.06L8.94 10 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
    </IconWrapper>
);

export const ChevronDoubleRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M10.828 10l-4.414 4.414a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 00-1.06 1.06L10.828 10zM4.828 10l-4.414 4.414a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 00-1.06 1.06L4.828 10z" clipRule="evenodd" />
    </IconWrapper>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 4.343a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM6.464 13.536a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM4.25 10a.75.75 0 01-.75.75H2a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM13.536 6.464a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM4.343 15.657a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06z" />
    </IconWrapper>
);

export const CloudSunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM14.5 7.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5h1.5a.75.75 0 00.75-.75zM14.636 10.386a.75.75 0 00-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM12 13.25a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75zM5.5 13a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M5.999 3.223c.394.044.78.182 1.125.405a.75.75 0 00.72-1.298A5.443 5.443 0 006.39 1.5H6.375a.75.75 0 00-.75.75v1.5c0 .085.014.167.04.243l.334-.02z" />
        <path d="M11.999 15.223c-.394-.044-.78-.182-1.125-.405a.75.75 0 00-.72 1.298 5.443 5.443 0 004.145.832H14.375a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.816-.743l-.31.02z" />
    </IconWrapper>
);

export const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path d="M5.5 10.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM2.5 12.5a.75.75 0 000 1.5h.5a3.5 3.5 0 013.5 3.5v.5a.75.75 0 001.5 0v-.5a5 5 0 00-5-5h-.5z" />
        <path d="M17.5 7.5a.75.75 0 000-1.5h-.5a3.5 3.5 0 01-3.5-3.5v-.5a.75.75 0 00-1.5 0v.5a5 5 0 005 5h.5z" />
    </IconWrapper>
);

export const RainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M7 14a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5H7.75a.75.75 0 01-.75-.75zm3.75-.75a.75.75 0 00-1.5 0h.01a.75.75 0 000 1.5h1.49a.75.75 0 00.75-.75.75.75 0 00-.75-.75z" clipRule="evenodd" />
        <path d="M5.5 10.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM2.5 12.5a.75.75 0 000 1.5h.5a3.5 3.5 0 013.5 3.5v.5a.75.75 0 001.5 0v-.5a5 5 0 00-5-5h-.5z" />
    </IconWrapper>
);

export const WalkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M8.25 4.5a.75.75 0 01.75.75v2.25H11a.75.75 0 010 1.5H9v4.5a.75.75 0 01-1.5 0V9H5.25a.75.75 0 010-1.5H7.5V5.25a.75.75 0 01.75-.75zM6 3a.75.75 0 000 1.5A.75.75 0 006 3z" clipRule="evenodd" />
        <path d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM4.5 8a2 2 0 100-4 2 2 0 000 4z" />
    </IconWrapper>
);

export const SubwayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <IconWrapper {...props}>
        <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v13.25C6 17.66 6.84 18.5 7.875 18.5h4.25C13.16 18.5 14 17.66 14 16.625V3.375C14 2.34 13.162 1.5 12.125 1.5H7.875zM7.5 3.375c0-.207.168-.375.375-.375h4.25c.207 0 .375.168.375.375v9.375h-5V3.375zm-1.5 9.375a.75.75 0 01.75-.75h5a.75.75 0 01.75.75v4.25c0 .207-.168.375-.375.375H7.875c-.207 0-.375-.168-.375-.375V12.75z" clipRule="evenodd" />
    </IconWrapper>
);