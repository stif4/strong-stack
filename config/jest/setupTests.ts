// Такой файл вы могли наблюдать при create-react-app
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
