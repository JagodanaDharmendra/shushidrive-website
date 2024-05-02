import { Content } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { SliceComponentProps } from "@prismicio/react"

import Section from "@/components/section"

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <Section>
      <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex justify-between"
      >
        <div className="flex items-center justify-center">
          <div>
            {slice.primary.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slice.primary.logo.url!}
                alt={slice.primary.logo.alt!}
                width={slice.primary.logo.dimensions!.width}
                height={slice.primary.logo.dimensions!.height}
                className="max-w-[80px] max-h-[100px]"
              />
            )}
          </div>
          <div>{slice.primary.name && <p>{slice.primary.name}</p>}</div>
        </div>
        <div>
          <ul className="flex space-x-4">
            {slice.items.map((item, index) => (
              <li key={index}>
                <PrismicNextLink field={item.link}>
                  {item.title}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Header
