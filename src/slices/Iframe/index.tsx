import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Iframe`.
 */
export type IframeProps = SliceComponentProps<Content.IframeSlice>

/**
 * Component for "Iframe" Slices.
 */
const Iframe = ({ slice }: IframeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.iframe_link && (
        <iframe
        className='flex h-screen'
          src={slice.primary.iframe_link!}
          title={slice.primary.iframe_link!}
          width="100%"
          height={"100%vh"}
        />
      )}
    </section>
  )
}

export default Iframe
