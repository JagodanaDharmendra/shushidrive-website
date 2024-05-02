import { components } from "@/slices"
import { SliceZone } from "@prismicio/react"
import {
  getSlices,
  SliceSimulator,
  SliceSimulatorParams,
} from "@slicemachine/adapter-next/simulator"

export default function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const slices = getSlices(searchParams.state)

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  )
}
