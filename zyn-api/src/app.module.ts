import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password',
      database: 'zyn_app_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
