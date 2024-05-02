import { Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"

import Section from "@/components/section"

/**
 * Props for `TextSection`.
 */
export type TextSectionProps = SliceComponentProps<Content.TextSectionSlice>

/**
 * Component for "TextSection" Slices.
 */
const TextSection = ({ slice }: TextSectionProps): JSX.Element => {
  return (
    <Section withVerticalPadding>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div>
          <h1 className="text-4xl">
            <PrismicRichText field={slice.primary.heading} />
          </h1>
          <p className='text-base font-semibold text-gray-400'>{slice.primary.description}</p>
        </div>
        <div className='my-4 sm:my-8'>
          <PrismicRichText field={slice.primary.content} />
        </div>
      </section>
    </Section>
  )
}

export default TextSection
