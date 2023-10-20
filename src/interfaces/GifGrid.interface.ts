export interface Giphy {
    data: Datum[];
    pagination: Pagination;
    meta: Meta;
  }
  
  interface Meta {
    status: number;
    msg: string;
    response_id: string;
  }
  
  interface Pagination {
    total_count: number;
    count: number;
    offset: number;
  }
  
  interface Datum {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: Images;
    analytics_response_payload: string;
    analytics: Analytics;
    user?: User;
  }
  
  interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
  }
  
  interface Analytics {
    onload: Onload;
    onclick: Onload;
    onsent: Onload;
  }
  
  interface Onload {
    url: string;
  }
  
  interface Images {
    original: Original;
    downsized: Downsized;
    downsized_large: Downsized;
    downsized_medium: Downsized;
    downsized_small: Downsizedsmall;
    downsized_still: Downsized;
    fixed_height: Fixedheight;
    fixed_height_downsampled: Fixedheightdownsampled;
    fixed_height_small: Fixedheightsmall;
    fixed_height_small_still: Fixedheightsmallstill;
    fixed_height_still: Downsized;
    fixed_width: Fixedwidth;
    fixed_width_downsampled: Fixedheightdownsampled;
    fixed_width_small: Fixedheightsmall;
    fixed_width_small_still: Fixedheightsmallstill;
    fixed_width_still: Downsized;
    looping: Looping;
    original_still: Downsized;
    original_mp4: Originalmp4;
    preview: Downsizedsmall;
    preview_gif: Fixedheightsmallstill;
    preview_webp?: Downsized;
    '480w_still': Downsized;
    hd?: Originalmp4;
  }
  
  interface Originalmp4 {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
  }
  
  interface Looping {
    mp4_size?: string;
    mp4?: string;
  }
  
  interface Fixedwidth {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size?: string;
    mp4?: string;
    webp_size: string;
    webp: string;
  }
  
  interface Fixedheightsmallstill {
    height?: string;
    width?: string;
    size?: string;
    url?: string;
  }
  
  interface Fixedheightsmall {
    height?: string;
    width?: string;
    size?: string;
    url?: string;
    mp4_size?: string;
    mp4?: string;
    webp_size?: string;
    webp?: string;
  }
  
  interface Fixedheightdownsampled {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size?: string;
    webp?: string;
  }
  
  interface Fixedheight {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size?: string;
    mp4?: string;
    webp_size?: string;
    webp?: string;
  }
  
  interface Downsizedsmall {
    height?: string;
    width?: string;
    mp4_size?: string;
    mp4?: string;
  }
  
  interface Downsized {
    height: string;
    width: string;
    size: string;
    url: string;
  }
  
  interface Original {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size?: string;
    webp?: string;
    frames: string;
    hash: string;
  }

  export interface GifItemInterface { id: string; title: string; url: string }