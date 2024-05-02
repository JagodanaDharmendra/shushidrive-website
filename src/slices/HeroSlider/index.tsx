import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

import Section from "@/components/section"

/**
 * Props for `HeroSlider`.
 */
export type HeroSliderProps = SliceComponentProps<Content.HeroSliderSlice>

/**
 * Component for "HeroSlider" Slices.
 */
const HeroSlider = ({ slice }: HeroSliderProps): JSX.Element => {
  return (
    <Section>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {"Slider with slide here"}
      </section>
    </Section>
  )
}

export default HeroSlider
