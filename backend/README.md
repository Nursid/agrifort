# Agriculture Dashboard Backend API

A comprehensive Node.js backend API for the Agriculture Dashboard with multi-role authentication system.

## 🚀 Features

- **Multi-Role Authentication**: Admin, Farmer, Distributor, Dealer roles
- **JWT Authentication**: Secure token-based authentication
- **RESTful API**: Clean and consistent API design
- **MySQL Database**: With Sequelize ORM
- **Input Validation**: Comprehensive request validation
- **Rate Limiting**: API rate limiting for security
- **Error Handling**: Centralized error handling
- **CORS Support**: Cross-origin resource sharing
- **Security**: Helmet.js for security headers
- **Logging**: Morgan for request logging
- **Compression**: Response compression

## 🏗️ Architecture

```
backend/
├── config/          # Database configuration
├── controllers/     # Route controllers (business logic)
├── middleware/      # Custom middleware (auth, validation, etc.)
├── models/          # Sequelize models
├── routes/          # Express routes
├── seeders/         # Database seeders
├── migrations/      # Database migrations
├── utils/           # Utility functions
├── tests/           # Test files
├── server.js        # Main server file
└── package.json     # Dependencies and scripts
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=agriculture_dashboard
   DB_USERNAME=root
   DB_PASSWORD=your_password
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRES_IN=7d
   FRONTEND_URL=http://localhost:3000
   ```

4. **Set up MySQL database**
   ```sql
   CREATE DATABASE agriculture_dashboard;
   ```

5. **Run database migrations and seeders**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

## 🚦 Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/auth/register` | Register new user | Public |
| POST | `/auth/login` | Login user | Public |
| GET | `/auth/me` | Get current user | Private |
| PUT | `/auth/profile` | Update profile | Private |
| PUT | `/auth/change-password` | Change password | Private |
| POST | `/auth/logout` | Logout user | Private |

### User Management Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/users` | Get all users | Admin |
| GET | `/users/:id` | Get single user | Admin/Owner |
| POST | `/users` | Create new user | Admin |
| PUT | `/users/:id` | Update user | Admin/Owner |
| DELETE | `/users/:id` | Delete user | Admin |
| GET | `/users/stats` | Get user statistics | Admin |

### Crop Management Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/crops` | Get all crops | Farmer/Admin |
| GET | `/crops/:id` | Get single crop | Farmer/Admin |
| POST | `/crops` | Create new crop | Farmer/Admin |
| PUT | `/crops/:id` | Update crop | Farmer/Admin |
| DELETE | `/crops/:id` | Delete crop | Farmer/Admin |
| GET | `/crops/stats` | Get crop statistics | Farmer/Admin |

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Demo Accounts

| Role | Username | Password |
|------|----------|----------|
| Admin | admin | admin123 |
| Farmer | farmer | farmer123 |
| Distributor | distributor | distributor123 |
| Dealer | dealer | dealer123 |

## 🔒 Role-Based Access Control

- **Admin**: Full access to all resources
- **Farmer**: Manage own crops and profile
- **Distributor**: Manage orders and logistics (to be implemented)
- **Dealer**: Manage customers and sales (to be implemented)

## 📝 Request/Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "field_name",
      "message": "Validation error message",
      "value": "invalid_value"
    }
  ]
}
```

## 🗄️ Database Models

### User Model
- Authentication and profile information
- Role-based access control
- Password hashing with bcrypt

### Crop Model
- Crop management for farmers
- Planting and harvest tracking
- Yield and area calculations

### Product Model
- Product catalog
- Pricing and inventory details
- Quality and certification info

### Order Model
- Purchase and sale orders
- Status tracking
- Payment information

### Customer Model
- Customer management for dealers
- Business and individual customers
- Credit and payment terms

### Inventory Model
- Stock management
- Batch tracking
- Expiry and quality monitoring

## 🛡️ Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API rate limiting
- **Input Validation**: Request validation with express-validator
- **Password Hashing**: bcrypt for password security
- **JWT Authentication**: Secure token-based auth

## 📊 API Rate Limits

- **General**: 100 requests per 15 minutes
- **Authentication**: 5 requests per 15 minutes
- **Password Reset**: 3 requests per hour
- **File Upload**: 10 requests per 15 minutes

## 🧪 Testing

Run tests:
```bash
npm test
```

## 📦 Database Commands

```bash
# Run migrations
npm run db:migrate

# Run seeders
npm run db:seed

# Reset database (drop, migrate, seed)
npm run db:reset
```

## 🚀 Deployment

1. Set `NODE_ENV=production`
2. Configure production database
3. Set secure JWT secret
4. Configure CORS for production domains
5. Use PM2 or similar for process management

## 🤝 Contributing

1. Follow the existing code structure
2. Add proper validation for new endpoints
3. Include error handling
4. Update documentation
5. Add tests for new features

## 📄 License

This project is licensed under the ISC License.
