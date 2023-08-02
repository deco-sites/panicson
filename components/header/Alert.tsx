import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 12 }: Props) {
  const id = useId();

  return (
    <div id={id} class="w-[25vw] flex align-middle">
      <Slider.PrevButton class="btn bg-transparent border-none hover:bg-transparent left-[-5vw] relative">
        <Icon size={20} id="ChevronLeft" strokeWidth={1} class="text-white" />
      </Slider.PrevButton>
      <Slider class="carousel carousel-center bg-pana-blue gap-6 scrollbar-none w-40">
        {alerts.map((alert, index) => (
          <Slider.Item index={index} class="carousel-item w-40 justify-center">
            <span class="text-sm text-secondary-content flex justify-center items-center h-[38px] translate-y-1">
              {alert}
              <a href=""></a>
            </span>
          </Slider.Item>
        ))}
      </Slider>
      <Slider.NextButton class="btn bg-transparent border-none hover:bg-transparent left-[5vw] relative">
        <Icon size={20} id="ChevronRight" strokeWidth={1} class="text-white" />
      </Slider.NextButton>

      <SliderJS
        rootId={id}
        interval={interval && interval * 1e3}
        infinite
        scroll="auto"
      />
    </div>
  );
}

export default Alert;
