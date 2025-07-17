// server/app.js

// ... (imports)

const app = express();

// ... (other middleware)

// CORS configuration
const allowedOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://eventura.mits.ac.in']
    : ['http://localhost:5173', 'http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

app.use(cors(corsOptions));

// ... (rest of the file)
