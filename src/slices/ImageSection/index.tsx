import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `ImageSection`.
 */
export type ImageSectionProps = SliceComponentProps<Content.ImageSectionSlice>

/**
 * Component for "ImageSection" Slices.
 */
const ImageSection = ({ slice }: ImageSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(slice, null, 2)}</pre>
    </section>
  )
}

export default ImageSection
