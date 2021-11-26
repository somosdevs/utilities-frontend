import { useState } from 'react'
import Image from 'next/image'
import useUser from 'hooks/useUser'
import AccountPopover from './AccountPopover'

export default function HeaderLayout ({ pageName }) {
  const user = useUser()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const handleClick = () => setIsPopoverOpen(!isPopoverOpen)

  return (
    <>
      <header>
        <h2>{pageName}</h2>
        <div className="button__popover">
          <button onClick={handleClick}>
            <Image
              className="image__rounded"
              src={user ? user.avatar : '/vercel.svg'}
              alt="Avatar Image"
              width="40px"
              height="40px"
            />
          </button>
          { isPopoverOpen && <AccountPopover /> }
        </div>
      </header>

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
          width: 100%;
          padding: 0 10%;
          font-size: 1.25rem;
          background-color: var(--secondary);
          box-shadow: inset 0 -1px 0 #ffffff55;
        }

        .button__popover {
          position: relative;
          z-index: 21;
        }
      `}</style>
    </>
  )
}
