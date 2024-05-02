import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `ServicesAndProducts`.
 */
export type ServicesAndProductsProps =
  SliceComponentProps<Content.ServicesAndProductsSlice>

/**
 * Component for "ServicesAndProducts" Slices.
 */
const ServicesAndProducts = ({
  slice,
}: ServicesAndProductsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(slice, null, 2)}</pre>
    </section>
  )
}

export default ServicesAndProducts
