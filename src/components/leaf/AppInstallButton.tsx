export type Platform = 'appStore' | 'googlePlay';

type Props = {
  platform: Platform;
};

const AppInstallButton = ({ platform }: Props) => {
  switch (platform) {
    case 'appStore':
      return (
        <a
          href='https://apps.apple.com/jp/app/itunes-store/id915061235?itsct=apps_box_badge&itscg=30200'
          className='inline-block h-20 w-64 overflow-hidden rounded-lg'
        >
          <img
            src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&releaseDate=1464739200&h=b488c8877a1de0c0ee752e2cea473eec'
            alt='Download on the App Store'
            className='mx-[-20px] h-20 w-64 rounded-lg'
          />
        </a>
      );
    case 'googlePlay':
      return (
        <a
          href='https://play.google.com/store/#?pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
          className='inline-block'
        >
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
