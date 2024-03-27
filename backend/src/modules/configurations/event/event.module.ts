import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventFeature, Events } from './event.model';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { MetaData } from '../MetaData/meta.model';
import { EventRegistration } from './modules/eventRegistration/eventRegistration.model';
import { EventRegistrationController } from './modules/eventRegistration/eventRegistration.controller';
import { EventRegistrationService } from './modules/eventRegistration/eventRegistration.service';
import { EventFeatureController } from './event-feature.controller';
import { EventFeatureService } from './event-feature.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Events,
      EventFeature,
      MetaData,
      EventRegistration,
    ]),
  ],
  controllers: [
    EventController,
    EventFeatureController,
    EventRegistrationController,
  ],
  providers: [EventService, EventFeatureService, EventRegistrationService],
})
export class EventModule {}
