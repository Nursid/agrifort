# Local Images Directory

This directory contains all the local images used in the AgriFort Technologies landing page.

## Directory Structure

```
src/assets/images/
├── products/          # AgriFort product images
│   ├── vikelp-granules.jpg
│   ├── nutriflax-pk.jpg
│   ├── hortis-sp.jpg
│   └── silfort-100.jpg
├── crops/            # Crop showcase images
│   ├── wheat.jpg
│   ├── rice.jpg
│   ├── cotton.jpg
│   └── vegetables.jpg
└── hero/             # Hero section and testimonial images
    ├── agriculture-hero.jpg
    ├── farmer-portrait.jpg
    ├── testimonial-1.jpg
    ├── testimonial-2.jpg
    └── testimonial-3.jpg
```

## Image Usage

### Products Section
- **vikelp-granules.jpg** - ViKelp Granules ULTRA product image
- **nutriflax-pk.jpg** - NutriFlax Pk Plant Growth Stimulant image
- **hortis-sp.jpg** - Hortis SP Naturally Derived Product image
- **silfort-100.jpg** - SilFort 100 with 100% Silica Purity image

### Crops Section
- **wheat.jpg** - Golden wheat fields
- **rice.jpg** - Healthy rice paddies
- **cotton.jpg** - Fluffy cotton bolls
- **vegetables.jpg** - Fresh organic produce

### Hero Section
- **agriculture-hero.jpg** - Main hero background image for about section
- **farmer-portrait.jpg** - Farmer portrait (currently unused)
- **testimonial-1.jpg** - Rajesh Kumar (Wheat Farmer, Punjab)
- **testimonial-2.jpg** - Priya Sharma (Rice Farmer, Andhra Pradesh)
- **testimonial-3.jpg** - Amit Patel (Cotton Farmer, Gujarat)

## Benefits of Local Images

1. **Faster Loading** - No external network requests
2. **Reliability** - Images always available, no broken links
3. **Offline Support** - Works without internet connection
4. **Consistent Performance** - No dependency on external CDNs
5. **Better Control** - Can optimize images for specific use cases
6. **Privacy** - No external tracking or data sharing

## Image Optimization

All images have been optimized for web use:
- Appropriate dimensions for their use cases
- Compressed for faster loading
- High quality while maintaining reasonable file sizes

## Adding New Images

To add new images:

1. Place the image file in the appropriate subdirectory
2. Update the component to import the new image using `require()`
3. Update this README if needed

## File Sizes

- **Products**: ~24-33 KB each
- **Crops**: ~20-29 KB each  
- **Hero**: ~9-168 KB each

Total images size: ~400 KB (very reasonable for a landing page)
