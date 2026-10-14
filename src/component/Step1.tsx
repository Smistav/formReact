import type { Data } from "../App"

type Step1Props = {
  data: Data
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Step1({ data, onChange }: Step1Props) {
  return (
    <div>
      <div>
        <span>Имя</span>
        <input name="firstName" value={data.firstName} onChange={onChange} />
      </div>
      <div>
        <span>Фамилия</span>
        <input name="secondName" value={data.secondName} onChange={onChange} />
      </div>
      <div>
        <span>Почта</span>
        <input name="email" value={data.email} onChange={onChange} />
      </div>
    </div>
  )
}
