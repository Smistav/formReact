import type { Data } from "../App"

type Step2Props = {
  data: Data
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Step2({ data, onChange }: Step2Props) {
  return (
    <div>
      <div>
        <span>Город</span>
        <input name="city" value={data.city} onChange={onChange} />
      </div>
      <div>
        <span>Страна</span>
        <input name="country" value={data.country} onChange={onChange} />
      </div>
      <div>
        <span>ZIP</span>
        <input name="zip" value={data.zip} onChange={onChange} />
      </div>
    </div>
  )
}