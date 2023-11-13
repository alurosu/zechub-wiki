import {SiZcash as Zcash, SiWikipedia as Wikipedia, SiYoutube as Youtube, SiXdadevelopers as Dadeveloper, SiRaspberrypi as RaspBerry, SiApplepodcasts as ApplePodcasts, SiTorbrowser as TorBrowser }  from 'react-icons/si'
import {PiShootingStarThin as ShootingStar, PiCircuitryLight as Circuitry, PiNumberCircleZeroThin as NumberCircle, PiSnowflakeThin as SnowFlake, PiLinkSimpleBold as LinkSimpleBold, PiPresentationChartLight as PresentationChar, PiSpotifyLogo as Spotify } from 'react-icons/pi'
import {RiSecurePaymentLine as SecurePayment, RiMailSendFill as MailSend, RiExchangeFundsFill as ExchangeFunds, RiLiveFill as Live, RiNftFill as NftFill, RiMessengerLine as MessengerLine, RiArticleLine } from 'react-icons/ri'
import {GrResources as Resources, GrCircleInformation as CircleInfo } from 'react-icons/gr'
import {TbBinaryTree2 as BinaryTree, TbTopologyRing as TopologyRing, TbCurrencyDollarZimbabwean as DollarZimbabwean,  Tb2Fa as Fa2, TbHexagonLetterN as HexagonLetterN, TbHexagonLetterZ as HexagonLetterZ} from 'react-icons/tb'
import {SlGraph as Graph } from 'react-icons/sl'
import {FaWallet as Wallet, FaFaucet as Faucet, FaListAlt as ListAlt, FaEthereum as Ethereum, FaQuestion } from 'react-icons/fa'
import {FcCurrencyExchange as CurrencyExchange, FcGallery, FcGlobe as Globe } from 'react-icons/fc'
import {BsFillArrowUpRightCircleFill as ArrowUp, BsShieldShaded as ShieldShaded, BsQrCode as QrCode, BsPlay as Play, BsNewspaper as Newspaper } from 'react-icons/bs'
import {MdOutlinePrivacyTip as PrivacyTip, MdOutlinePointOfSale as PointOfSale, MdRadar as Radar, MdTipsAndUpdates as TipsAndUpdates, MdSettings as Settings, MdOutlineEnhancedEncryption as OutlineEnchanceEncryption } from 'react-icons/md'
import {LiaServerSolid as ServerSolid, LiaLinkSolid as LinkSolid } from 'react-icons/lia'
import {BiLogoGraphql as LogoGraph, BiLock as Lock, BiCheckShield as CheckShield } from 'react-icons/bi'
import {ImParagraphLeft as Paragraph, ImPodcast as Podcast } from 'react-icons/im'
import {GiCheckedShield as CheckedShield, GiBorderedShield as BordererShield, GiSpellBook as SpellBook, GiMeshBall} from 'react-icons/gi'
import {LuFileKey as FileKey,LuTrees as Trees } from 'react-icons/lu'
import {IoBuildOutline as BuildOutline, IoConstructOutline } from 'react-icons/io5'
import {IoIosMicrophone as IosMicrophone} from 'react-icons/io'
import {CiStreamOn as StreamOn} from 'react-icons/ci' 
import {HiOutlineBuildingLibrary} from 'react-icons/hi2'

interface IconsFor {
    [key: string]: {
      [key: string]: string;
    };
  };

const iconsForMenu: IconsFor = {
    'Start Here': {
        'What is ZEC and Zcash': Zcash,
        'New User Guide': ShootingStar,
        'ZEC Use Cases': SecurePayment,
        'Zcash Resources': Resources,
        'Developer Resources': Dadeveloper,
        'Development Fund': BinaryTree,
        'Zcash Monetary Policy': Graph,
        'What is ZecHub': CircleInfo,
        'Using This Wiki': Wikipedia
    },
    'Tutorials': {
        'z2z Tutorial': Youtube,
        'Wallet Tutorials': Youtube,
        'Buy ZEC in Gemini': Youtube,
        'Nighthawk Wallet': Youtube,
        'Shielding ZEC': Youtube,
        'Spedn Demo': Youtube
    },
    'Using Zcash': {
        'Wallets': Wallet,
        'Buying ZEC': CurrencyExchange,
        'Transactions': ArrowUp,
        'Memos': MailSend,
        'Shielded Pools': ShieldShaded,
        'Faucets': Faucet,
        'Non-Custodial Exchanges': ExchangeFunds,
        'DEX List': ListAlt,
    },
    'Guides': {
        'Using ZEC Privately': PrivacyTip,
        'Visualizing Zcash Addresses': QrCode,
        'Full Nodes': ServerSolid,
        'Raspberry Pi 4 Full Node': RaspBerry,
        'Using ZEC in DeFi': Ethereum,
        'Free2z Live': Live,
        'Zgo Payment Processor': PointOfSale,
        'Zero-Knowledge vs Decoys': TopologyRing,
        'Visualizing the Zcash Network': LogoGraph,
        'ZK Shielded Asset Platforms': Paragraph,
    },
    'Zcash Tech': {
        'zk SNARKS': Circuitry,
        'Halo': NumberCircle,
        'FROST': SnowFlake,
        'Viewing Keys': FileKey,
        'Zcash Shielded Assets': DollarZimbabwean,
    },
    'Zcash Organizations': {
        'Electric Coin Company': Radar,
        'Zcash Foundation': CheckedShield,
        'Zcash Community Grants': HexagonLetterZ,
        'Shielded Labs': BordererShield
    },
    'Zcash Community': {
        'Community Links': LinkSimpleBold,
        'Zcash Global Ambassadors': Globe,
        'Community Projects': BuildOutline,
        'Arborist Calls': Trees,
        'Cypherpunk Zero NFT': NftFill,
        'Zcash Ecosystem Security': Lock,
        'Zcash Media': Play,
        'Zcon Archive': PresentationChar,
    },
    'Zcash Social Media': {
        'Podcasts': IosMicrophone,
        'Social Media Links': LinkSolid,
        'ZecWeekly Newsletter': Newspaper,
        'pgp for crypto podcast': Podcast,
        'The Zcash Podcast': Zcash,
        'Shielded Transaction Podcast': CheckShield,
        'The ZK Podcast': Spotify,
        'The z2z Podcast': StreamOn,
        'Zcast Podcast': ApplePodcasts,
        'Zero to Zero-knowledge': SpellBook,
        'zl;dr': TipsAndUpdates,
    },
    'Privacy Tools': {
        '2FA Hardware Devices': Fa2,
        'GrapheneOS': Settings,
        'Namada Protocol': HexagonLetterN,
        'PGP Encryption': OutlineEnchanceEncryption,
        'Secure Messengers': MessengerLine,
        'Tor and I2P': TorBrowser
    },
    'Research': {
        'Social Media Data Collection': RiArticleLine,
    },
    "Glossary & FAQ's": {
        'Zcash Library': HiOutlineBuildingLibrary,
        'FAQ': FaQuestion,
        'gallery': FcGallery
    },
    'Contribute': {
        'Help build ZecHub': IoConstructOutline,
        'ZecHub DAO': GiMeshBall
    }
}

export const matchIcons = (root: string, file: string) => {
    
    for (const key in iconsForMenu) {
        if (key === root) {
          for (const innerKey in iconsForMenu[key]) {
            if (innerKey === file) {
              return iconsForMenu[key][innerKey];
            }
          }
        }
      }
return 'Nothing'
}