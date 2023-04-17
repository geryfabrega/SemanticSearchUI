import './App.css';
import SearchPage from '../SearchPage';
import image from './XVIIABC.png';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Box from '@mui/material/Box';
import { RoundedCorner } from '@mui/icons-material';
import {useState} from "react";
import PopUpMessage from "../../components/PopUpMessage";
import { useParams } from 'react-router-dom';
import { Divider } from '@mui/material';
import ResultsBoxes from '../../components/ResultBoxes';

function SearchResults() {
    const particlesInit = useCallback(async (engine: Engine) => {

      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);
    const [messageOn,setMessage] = useState(true);
    const { query } = useParams<{ query: string }>();

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Particles
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
              margin: "0",
              padding: "0",
              zIndex: "10"
            }}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                  enable: true
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#89CFF0",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <div className="glass-container">
        <div className="glass-object"></div>
        </div>
        <div className="text-layer">
            <SearchPage queryString={query} resultMode={true}/>
            <Divider id="test-divider" className={'custom-divider'}/>
            <ResultsBoxes/>
        </div>
      </header>
    </div>
  );
}

export default SearchResults;