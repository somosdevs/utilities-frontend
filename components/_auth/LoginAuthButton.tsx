import tw from 'tailwind-styled-components';
import { ElasticSpinner } from 'components/Icon';
import { Provider } from 'types/login/provider';

export default function LoginAuthButton({
  handleClick,
  icon,
  provider,
  bgColor = '#fff',
  textColor = '#000',
  pending,
}: Provider & { pending: boolean }) {
  return (
    <Button
      type="button"
      onClick={(handleClick)}
      style={{ backgroundColor: bgColor, color: textColor }}
      $pending={pending}
    >
      {
        pending
          ? <ElasticSpinner color={textColor} />
          : <>{icon} Continue with {provider}</>
      }
    </Button>
  );
}

const Button = tw.button<{$pending: boolean}>`
  flex
  items-center
  justify-center
  gap-4
  h-10
  w-64
  rounded-md

  text-md

  ${(p) => (p.$pending ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90')}
`;
