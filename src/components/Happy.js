import React from 'react'
import a from "../assets/happy-svg.png"
import b from '../assets/happy.png'

const Happy = () => {
  return (
    <div className='happy'>
      <div className='happy-logo'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='65'
          height='56'
          viewBox='0 0 65 56'
          fill='none'
        >
          <g clip-path='url(#clip0_373_383)'>
            <path
              d='M59.4547 45.9005C60.1375 45.2177 60.1375 43.9886 59.4547 43.2717L16.9842 0.835307C16.6428 0.493904 16.1648 0.289062 15.6868 0.289062C15.2089 0.289062 14.7309 0.493904 14.3895 0.835307C8.34668 6.87814 5.03508 14.867 5.03508 23.402C5.03508 31.9371 8.34668 39.9601 14.3554 45.9688C20.3641 51.9775 28.387 55.2891 36.9221 55.2891C45.3889 55.2549 53.4119 51.9433 59.4547 45.9005ZM17.8377 44.6373L34.1909 28.2841V51.4653C28.387 50.9874 22.4125 48.6317 17.8377 44.6373ZM32.4497 25.3822L15.721 42.0768C11.6241 37.4337 9.2002 30.8446 8.79051 25.3822H32.4497ZM54.6409 44.5349C49.8954 48.7341 44.0916 51.1581 37.6049 51.4995V27.4989L54.6409 44.5349ZM32.518 21.6267H8.79051C9.16605 15.1401 11.59 9.54108 15.721 4.82972L32.518 21.6267Z'
              fill='#009B4C'
            />
          </g>
          <defs>
            <clipPath id='clip0_373_383'>
              <rect
                width='55'
                height='65'
                fill='white'
                transform='matrix(0 1 -1 0 65 0.289062)'
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='55'
          height='66'
          viewBox='0 0 55 66'
          fill='none'
        >
          <g clip-path='url(#clip0_373_387)'>
            <path
              d='M45.6114 5.83437C44.9286 5.15156 43.6996 5.15156 42.9826 5.83437L0.546245 48.3049C0.204842 48.6463 0 49.1243 0 49.6022C0 50.0802 0.204842 50.5581 0.546245 50.8995C6.58908 56.9424 14.5779 60.254 23.113 60.254C31.648 60.254 39.671 56.9424 45.6797 50.9337C51.6884 44.925 55 36.902 55 28.367C54.9659 19.9002 51.6543 11.8772 45.6114 5.83437ZM44.3482 47.4514L27.995 31.0982H51.1763C50.6983 36.902 48.3426 42.8766 44.3482 47.4514ZM25.0931 32.8393L41.7877 49.5681C37.1446 53.6649 30.5556 56.0889 25.0931 56.4986V32.8393ZM44.2458 10.6481C48.4451 15.3936 50.869 21.1975 51.2104 27.6842H27.2098L44.2458 10.6481ZM21.3377 32.7711V56.4986C14.851 56.123 9.25202 53.6991 4.54066 49.5681L21.3377 32.7711Z'
              fill='#EA2306'
            />
          </g>
          <defs>
            <clipPath id='clip0_373_387'>
              <rect
                width='55'
                height='65'
                fill='white'
                transform='translate(0 0.289062)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className='happy-logo-1'>
        <img src={a} alt='' />
      </div>
      <div className='section-center happy-details'>
        <div className='happy-container'>
          <article className='happy-text'>
            <h3>Happy family with us</h3>
            <h2>Ricardo, Isabella, Olivia & Elizabeth</h2>
            <p>
              "As I glanced across the Mexican restaurant, a radiant scene
              unfolded before my eyes. A happy family sat together at a well-set
              table, their faces adorned with genuine smiles that mirrored the
              warmth of the ambiance. Laughter and lively conversations filled
              the air as they shared delightful moments, savoring not only the
              delicious cuisine but also the joy of each other's company. It was
              a tableau of love, unity, and shared happiness—a beautiful
              snapshot of a family creating cherished memories amidst the
              inviting glow of the Mexican restaurant."
            </p>
          </article>
          <article className="happy-img">
           <img src={b} alt="" />
          </article>
        </div>
      </div>
    </div>
  )
}

export default Happy
