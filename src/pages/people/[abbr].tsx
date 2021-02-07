import { useRouter } from 'next/router'
import { Label } from '../../components'

export default function PersonPage() {
  const abbr = useRouter().query.abbr as string

  return <Label text={abbr} />
}
