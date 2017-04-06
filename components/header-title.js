import theme from "./style/theme";

export default () => (
  <h1>
    Innovation Labs
    <span>
      <h2>
        We are hiring: VG86IHJwb21ib0BoZXhhY3RhLmNvbQ0KU3ViamVjdDogU2hvd2Nhc2UgRWFzdGVyIEVnZw==
      </h2>
    </span>
    <style jsx>
      {
        `
        h1 {
          font-size: 24px;
          color: ${theme.darkSecondaryColor};
          letter-spacing: 1.1px;
          transition: all 0.5s;
          cursor: pointer;
					position: relative;
					z-index: 10;
        }

        h1:hover {
          animation: shadow 1s ease-in-out infinite alternate;
          color: #fff;
        }

				span {
					position: fixed;
					opacity: 0;
					z-index: -5;
					background: #111;
          transition: all 1s;
					width: 0;
					height: 0;
					overflow: hidden;
				}

				h1:hover span {
					opacity: 0.8;
					z-index: 5;
					top: 64px;
					left: 0;
					right: 0;
					bottom: 0;
					width: auto;
					height: auto;
          animation: shadow 1s ease-in-out infinite alternate;
				}

				h2 {
					transform: translateX(150vw);
					position: absolute;
					top: 50%;
    			white-space: nowrap;
				}

				h1:hover h2 {
          animation: marquee 40s linear infinite;
				}

        @keyframes shadow {
          from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px ${theme.accentColor}, 0 0 70px ${theme.accentColor}, 0 0 80px ${theme.accentColor}, 0 0 100px ${theme.accentColor}, 0 0 150px ${theme.accentColor};
          }
          to {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${theme.accentColor}, 0 0 35px ${theme.accentColor}, 0 0 40px ${theme.accentColor}, 0 0 50px ${theme.accentColor}, 0 0 75px ${theme.accentColor};
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(150vw);
          }
          to {
            
            transform: translateX(-250vw);
          }
        }
				`
      }
    </style>
  </h1>
);
