import type { Data } from "../App"

type Step3Props = {
  data: Data
}
export default function Step3({ data }: Step3Props) {
  return (
    <div>
      <div>
        <span>Имя </span>
        <span>{data.firstName}</span>
      </div>
      <div>
        <span>Фамилия </span>
        <span>{data.secondName}</span>
      </div>
      <div>
        <span>Почта </span>
        <span>{data.email}</span>
      </div>
      <div>
        <span>Город </span>
        <span>{data.city}</span>
      </div>
      <div>
        <span>Страна </span>
        <span>{data.country}</span>
      </div>
      <div>
        <span>ZIP </span>
        <span>{data.zip}</span>
      </div>
    </div>
  )
}
