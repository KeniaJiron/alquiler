import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { PropiedadModule } from './propiedad/propiedad.module';
import { ArrendatarioModule } from './arrendatario/arrendatario.module';
import { PropietarioModule } from './propietario/propietario.module';
import { ComentarioModule } from './comentario/comentario.module';
import { ArrendamientoModule } from './arrendamiento/arrendamiento.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'alquiler',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    FilesModule,
    PropiedadModule,
    ArrendatarioModule,
    PropietarioModule,
    ComentarioModule,
    ArrendamientoModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
