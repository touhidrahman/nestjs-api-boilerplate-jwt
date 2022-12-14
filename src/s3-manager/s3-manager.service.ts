import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { S3 } from 'aws-sdk'
import { InjectAwsService } from 'nest-aws-sdk'

@Injectable()
export class S3ManagerService {
  private bucketName = this.configService.get('AWS_BUCKET_NAME')

  constructor(@InjectAwsService(S3) private readonly s3: S3, private configService: ConfigService) {}

  async listBucketContents() {
    const response = await this.s3.listObjectsV2({ Bucket: this.bucketName }).promise()
    return response.Contents?.map((c) => c.Key)
  }

  async uploadPublic(file: Express.Multer.File, folder: string) {
    const { originalname, buffer, mimetype } = file
    const random = Math.random().toString(36).substring(7)
    const filename = folder + '/' + random + '_' + String(originalname)

    const result = this.s3
      .putObject({
        Bucket: this.bucketName,
        Key: filename,
        Body: buffer,
        ContentType: mimetype,
        ACL: 'public-read',
        ContentDisposition: 'inline',
      })
      .promise()

      this.s3.getObject({ Bucket: this.bucketName, Key: filename }, (err, data) => {
        console.log(data)
      })

    return result
  }
}
