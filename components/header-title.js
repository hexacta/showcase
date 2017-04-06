import theme from "./style/theme";

export default () => (
  <h1>
    Innovation Labs
    <style jsx>
      {
        `
        h1 {
          font-size: 24px;
          color: ${theme.darkSecondaryColor};
          letter-spacing: 1.1px;
          transition: all 0.5s;
          cursor: pointer;
        }

        h1:hover {
          animation: shadow 1.5s ease-in-out infinite alternate;
          color: #fff;
        }

        @keyframes shadow {
          from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px ${theme.accentColor}, 0 0 70px ${theme.accentColor}, 0 0 80px ${theme.accentColor}, 0 0 100px ${theme.accentColor}, 0 0 150px ${theme.accentColor};
          }
          to {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${theme.accentColor}, 0 0 35px ${theme.accentColor}, 0 0 40px ${theme.accentColor}, 0 0 50px ${theme.accentColor}, 0 0 75px ${theme.accentColor};
          }
        }
				`
      }
    </style>
  </h1>
);