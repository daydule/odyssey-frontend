export type Platform = 'appStore' | 'googlePlay';

type Props = {
  platform: Platform;
};

const AppInstallButton = ({ platform }: Props) => {
  switch (platform) {
    case 'appStore':
      return (
        <a href='#' className='inline-block h-20 w-64 overflow-hidden rounded-lg' title='App Store'>
          <img
            src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&releaseDate=1464739200&h=b488c8877a1de0c0ee752e2cea473eec'
            alt='Download on the App Store'
            className='h-20 w-64 rounded-lg'
          />
        </a>
      );
    case 'googlePlay':
      return (
        <a href='#' className='inline-block h-24 w-56' title='Google Store'>
          <img
            src='https://play.google.com/intl/en_us/badges/images/generic/ja_badge_web_generic.png'
            alt='Google Play で手に入れよう'
            className='my-[-10px] h-24 w-56'
          />
        </a>
      );
  }
};

export default AppInstallButton;
