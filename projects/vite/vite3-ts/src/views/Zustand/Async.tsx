// app.tsx
import { useState } from 'react'
import { useDataStore } from '@/zustand-store/async'

export function AsyncItem() {
  const { data, status, getData } = useDataStore((state) => state)
  const [value, setValue] = useState('')

  function clickHandler() {
    if (value) getData(value)
  }

  return (
    <div>
      <h1>Fetch with zustand</h1>
      <input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <button onClick={clickHandler}>Search</button>
      {status === 'Idle' && <p>No Data.</p>}
      {status === 'Loading' && <p>Loading...</p>}
      {status === 'Success' && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.full_name}</h2>
              <p>
                Repo Url:
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.html_url}
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
