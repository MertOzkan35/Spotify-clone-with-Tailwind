import { Icon } from "../../Icons";
import { Range, getTrackBackground } from "react-range";
import { useState } from "react";
import { useAudio } from "react-use";
import { secondsToTime } from "../../utlis";
function Player() {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([50]);

  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });
  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%] text-lg font-semibold">
        {" "}
        Portishead - Roads
      </div>
      <div className="flex flex-col items-center max-w-[45.125rem] w-[40%] ">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffle" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerPrev" />
          </button>
          <button className="w-8 h-8 flex bg-white items-center justify-center text-black rounded-full hover:scale-110">
            <Icon size={16} name="play" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerNext" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="repeat" />
          </button>
        </div>
        <div className="w-full">
          {audio}
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className="w-full h-7 flex group "
                style={props.style}
              >
                <div
                  ref={props.ref}
                  className="h-1 w-full rounded-md self-center"
                  style={{
                    background: getTrackBackground({
                      values: values,
                      colors: ["#1db954", "#535353"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className="h-3 w-3 rounded-full bg-white opacity-0  group-hover:opacity-100"
                style={{
                  ...props.style,
                  boxShadow: "0px 2px 6px #AAA",
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="queue" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="device" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="volumeFull" />
        </button>
      </div>
    </div>
  );
}

export default Player;
