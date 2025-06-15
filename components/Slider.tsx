"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className="relative flex items-center select-none touch-none w-full h-10"
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume Slider"
    >

        <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
            <RadixSlider.Range className="absolute bg-white rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb
            className="block w-4 h-4 bg-white rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        />


    </RadixSlider.Root>
  );
};

export default Slider;
