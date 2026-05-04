import { asset } from '../utils/assetPath';

export default function GalleryBanner() {
  return (
    <section className="gallery-banner">
      <img src={asset('images/gallery-banner.png')} alt="Bakery display showcase" />
    </section>
  )
}
